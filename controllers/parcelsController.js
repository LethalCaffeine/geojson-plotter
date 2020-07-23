const {getGeoJson, getAllGeoJson, getCommercialGeoJson} = require('../src/services/ParcelService');

exports.parcel_get = async (req, res, next) => {

    const parcelGeometries = await getAllGeoJson();
    return res.json(parcelGeometries);
};

exports.parcel_get_commercial = async (req, res, next) => {

    const parcelGeometries = await getCommercialGeoJson();
    return res.json(parcelGeometries);
};

exports.parcel_post = async (req, res, next) => {

    const parid = req.body.name;
    const parcelGeometry = await getGeoJson(parid);
    return res.json(parcelGeometry);
};