const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR = 'img/muffin-grey.svg';
const fileChooser = document.querySelector('.ad-form__field input[type=file]');
const preview = document.querySelector('.ad-form-header__preview').querySelector('img');
const loaderHousePicture = document.querySelector('.ad-form__upload input[type=file]');
const previewHousePicture = document.querySelector('.ad-form__photo');

const setAvatar = (loadingInput, previewItem) => {
  loadingInput.addEventListener('change', () => {
    const file = loadingInput.files[0];
    const fileName = file.name.toLowerCase();


    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();


      reader.addEventListener('load', () => {
        previewItem.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
};

const onAvatarLoading = () => {
  setAvatar(fileChooser, preview);
};


const housePhotoLoad = (loadInput, container) => {
  loadInput.addEventListener('change', () => {
    const file = loadInput.files[0];
    const fileName = file.name.toLowerCase();


    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();


      reader.addEventListener('load', () => {

        const newPhoto = document.createElement('img');
        newPhoto.src = reader.result;
        newPhoto.alt = 'Фотография жилья';
        newPhoto.style.width = '100%';
        container.appendChild(newPhoto);

        newPhoto.parentElement.style.display = 'flex';

      });
      reader.readAsDataURL(file);
    }
  });
};

const onhousePhotoLoad = () => {
  housePhotoLoad(loaderHousePicture, previewHousePicture);
};

loaderHousePicture.addEventListener('change', onhousePhotoLoad());
fileChooser.addEventListener('change', onAvatarLoading());

const resetPreviewPhoto = () => {
  preview.src = DEFAULT_AVATAR;
  previewHousePicture.innerHTML = '';
};

export { resetPreviewPhoto };
