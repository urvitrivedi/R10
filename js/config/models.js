import Realm from 'realm';

// define fave model and properties

const FaveSchema = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export const createFave = faveId => {
  realm.write(() => {
    realm.create('Fave', {
      id: faveId,
      faved_on: new Date()
    });
  });
};

export const deleteFave = faveId => {
  realm.write(() => {
    const faveToDelete = realm.objects('Fave').filtered('id == $0', faveId);
    realm.delete(faveToDelete);
  });
};

export const queryFaves = () => {
  return realm.objects('Fave').map(fave => fave.id);
};

export default realm;

// export default new Realm({ schema: [FaveSchema] });

//console.log('the path is: ', realm.path);
