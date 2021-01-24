import { Stop } from '../../models/Stop';

export class MapUtilities {
  public static googleKey: string = 'AIzaSyD19WL4QfWXEIp2v_sLBIDcqZauZNGkLWQ';

  constructor() {}

  /**
   *
   * @param coords [[lat,lng],[lat,lng],...]
   */
  public static createEncodings(coords: any): string | undefined{
    if (coords.length == 0) return null;
    var i = 0;

    var plat = 0;
    var plng = 0;

    var encoded_points = '';

    for (i = 0; i < coords.length; ++i) {
      var lat = coords[i][0];
      var lng = coords[i][1];

      encoded_points += this.encodePoint(plat, plng, lat, lng);

      plat = lat;
      plng = lng;
    }

    // close polyline
    encoded_points += this.encodePoint(plat, plng, coords[0][0], coords[0][1]);

    return encoded_points;
  }

  private static encodePoint(plat, plng, lat, lng) {
    var late5 = Math.round(lat * 1e5);
    var plate5 = Math.round(plat * 1e5);

    var lnge5 = Math.round(lng * 1e5);
    var plnge5 = Math.round(plng * 1e5);

    let dlng = lnge5 - plnge5;
    let dlat = late5 - plate5;

    return this.encodeSignedNumber(dlat) + this.encodeSignedNumber(dlng);
  }

  private static encodeSignedNumber(num) {
    var sgn_num = num << 1;

    if (num < 0) {
      sgn_num = ~sgn_num;
    }

    return this.encodeNumber(sgn_num);
  }

  private static encodeNumber(num) {
    var encodeString = '';

    while (num >= 0x20) {
      encodeString += String.fromCharCode((0x20 | (num & 0x1f)) + 63);
      num >>= 5;
    }

    encodeString += String.fromCharCode(num + 63);
    return encodeString;
  }

  /**
   *
   * @param encoded : string
   * return [ {lat,lng}, {lat,lng}, ...]
   */
  public static decode(encoded: string): object[] {
    if (encoded == null || encoded == '') return null;
    // array that holds the points

    var points = [];
    var index = 0,
      len = encoded.length;
    var lat = 0,
      lng = 0;
    while (index < len) {
      var b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63; //finds ascii                                                                                    //and substract it by 63
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);

      var dlat = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      var dlng = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ lat: lat / 1e5, lng: lng / 1e5 });
    }
    if (
      points[0].lat == points[points.length - 1].lat &&
      points[0].lng == points[points.length - 1].lng
    ) {
      points = points.slice(0, points.length - 1);
    }
    return points;
  }

  public static StopPointsToRoute(stops: Stop[]): any {
    let Lat = 0;
    let Lng = 0;
    let mapRoute = [];
    let i: number = 0;
    for (const s in stops) {
      i = Number(s);
      Lat += stops[i].SALat;
      Lng += stops[i].Lng;

      if (stops[i].PolyLinePoints != null && stops[i].PolyLinePoints !== '') {
        mapRoute.push({
          Stop: stops[i],
          PolyLinePoints: MapUtilities.decode(stops[i].PolyLinePoints),
          ViaWayPoints: MapUtilities.decode(stops[i].ViaWayPoints),
        });
      } else {
        mapRoute[i] = {
          Stop: stops[i],
          ViaWayPoints: [],
        };

        if (i !== stops.length - 1) {
          mapRoute[i].PolyLinePoints = [
            { lat: stops[i].SALat, lng: stops[i].Lng },
            { lat: stops[i + 1].SALat, lng: stops[i + 1].Lng },
          ];
        }
      }
    }

    return {
      route: mapRoute,
      center: { lat: Lat / stops.length, lng: Lng / stops.length },
    };
  }
}
