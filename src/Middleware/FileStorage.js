const multer = require('multer');

const ProfileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/profiles/');
    },
    filename: function (req, file, cb) {
      const ext = file.mimetype.split("/")[1];
      const filename = req.rootuser.userID;
      cb(null, filename + "." + ext);
    },
});

const SoilStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/soils/');
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = req.body.name;
    cb(null, filename + "." + ext);
  },
});

const DistributorStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/distributors/');
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = req.body.name;
    cb(null, filename + "." + ext);
  },
});

const Profile = multer({ storage: ProfileStorage });
const Soil = multer({ storage: SoilStorage });
const Distributor = multer({ storage: DistributorStorage });

module.exports = {
  Profile: Profile,
  Soil : Soil,
  Distributor : Distributor
};