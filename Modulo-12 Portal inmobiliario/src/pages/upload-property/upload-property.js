import { history } from '../../core/router/history';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onAddFile,
} from '../../common/helpers';
import {
  setCheckboxList,
  setOptionList,
  formatDeleteFeatureButtonId,
  onAddFeature,
  onRemoveFeature,
  onAddImage,
} from './upload-property.helpers';
import {
  formValidation,
  equipmentValidation,
} from './upload-property.validations';
import {
  getSalesTypeList,
  getProvinceList,
  getEquipmentList,
  insertProperty,
} from './upload-property.api';
import { mapUploadPropertyFromApiToVM } from './upload-property.mappers';

let uploadProperty = {
  id: '',
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  newSaleType: '',
  saleTypeIds: [],
  address: '',
  city: '',
  provinceId: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  newFeature: '',
  mainFeatures: [],
  newEquipment: '',
  equipmentIds: [],
  newImage: '',
  images: [],
};

Promise.all([getSalesTypeList(), getProvinceList(), getEquipmentList()]).then(
  ([salesTypeList, provinceList, equipmentList]) => {
    setCheckboxList(salesTypeList, 'saleTypes');
    setOptionList(provinceList, 'province');
    setCheckboxList(equipmentList, 'equipments');
  }
);

onUpdateField('title', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, title: value };
  formValidation.validateField('title', uploadProperty.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, notes: value };
  formValidation.validateField('notes', uploadProperty.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, email: value };
  formValidation.validateField('email', uploadProperty.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, phone: value };
  formValidation.validateField('phone', uploadProperty.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, price: value };
  formValidation.validateField('price', uploadProperty.price).then((result) => {
    onSetError('price', result);
  });
});

onUpdateField('saleTypes', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, newSaleType: value };
  formValidation
    .validateField('saleTypes', uploadProperty.newSaleType)
    .then((result) => {
      onSetError('saleTypes', result);
      uploadProperty.saleTypeIds.push(uploadProperty.newSaleType);
    });
});

onUpdateField('address', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, address: value };
  formValidation
    .validateField('address', uploadProperty.address)
    .then((result) => {
      onSetError('address', result);
    });
});

onUpdateField('city', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, city: value };
  formValidation.validateField('city', uploadProperty.city).then((result) => {
    onSetError('city', result);
  });
});

onUpdateField('province', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, provinceId: value };
  formValidation
    .validateField('province', uploadProperty.provinceId)
    .then((result) => {
      onSetError('province', result);
    });
});

onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, squareMeter: value };
  formValidation
    .validateField('squareMeter', uploadProperty.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, rooms: value };
  formValidation.validateField('rooms', uploadProperty.rooms).then((result) => {
    onSetError('rooms', result);
  });
});

onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, bathrooms: value };
  formValidation
    .validateField('bathrooms', uploadProperty.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, locationUrl: value };
  formValidation
    .validateField('locationUrl', uploadProperty.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

onUpdateField('newFeature', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, newFeature: value };
  formValidation
    .validateField('newFeature', uploadProperty.newFeature)
    .then((result) => {
      onSetError('newFeature', result);
    });
});

onSubmitForm('insert-feature-button', () => {
  formValidation
    .validateField('newFeature', uploadProperty.newFeature)
    .then((result) => {
      onSetError('newFeature', result);
      if (result.succeeded) {
        onAddFeature(uploadProperty.newFeature);
        uploadProperty.mainFeatures.push(uploadProperty.newFeature);
        formValidation
          .validateField('mainFeatures', uploadProperty.mainFeatures)
          .then((result) => {
            onSetError('mainFeatures', result);
            uploadProperty.mainFeatures.map((myFeature) => {
              onSubmitForm(formatDeleteFeatureButtonId(myFeature), () => {
                onRemoveFeature(myFeature);
                let index = uploadProperty.mainFeatures.indexOf(myFeature);
                uploadProperty.mainFeatures.splice(index, 1);
              });
            });
          });
      }
    });
});

onUpdateField('equipments', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, newEquipment: value };
  equipmentValidation
    .validateField('equipments', uploadProperty.newEquipment)
    .then((result) => {
      onSetError('equipments', result);
      uploadProperty.equipmentIds.push(uploadProperty.newEquipment);
    });
});

onUpdateField('images', (event) => {
  const value = event.target.value;
  uploadProperty = { ...uploadProperty, newImage: value };

  onAddFile('add-image', (value) => {
    onAddImage(value);
    uploadProperty.images.push(value);
  });

  formValidation
    .validateField('images', uploadProperty.images)
    .then((result) => {
      onSetError('images', result);
    });
});

const onSave = () => {
  return insertProperty(uploadProperty);
};

onSubmitForm('save-button', () => {
  delete uploadProperty.newSaleType;
  delete uploadProperty.newFeature;
  delete uploadProperty.newEquipment;
  delete uploadProperty.newImage;

  uploadProperty = mapUploadPropertyFromApiToVM(uploadProperty);

  formValidation.validateForm(uploadProperty).then((result) => {
    if (result.succeeded) {
      onSave().then(() => {
        alert('La vivienda se ha guardado');
        history.back();
      });
    }
  });
});
