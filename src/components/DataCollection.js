import firebase from '../firebase';


const db = firebase.database();
const features = db.ref('features_map');

const geAllFeature = () => {
  return features;
}

const DataCollection = {
  geAllFeature
}

export default DataCollection
