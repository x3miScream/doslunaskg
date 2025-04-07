import React, {useState} from 'react';
import useGetImage from '../../hooks/useGetImage';
import './PhotosUploader.css';

const PhotosUploader = ({addedPhotos, onChangeAddedPhotos}) => {

    const [photoLink, setPhotoLink] = useState('');
    const {loadingState, getImageById, getImageUrlData} = useGetImage();



    const addPhotoByLink = async (e) => {
        e.preventDefault();

        const url = `${process.env.REACT_APP_SERVER_URL}/api/upload-by-link`;
        const fetchBody = {
            link: photoLink
        };
        
        const fetchOptions = {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(fetchBody)
        };

        await fetch(url, fetchOptions)
            .then(response => response.json())
            .then(data => {
                if(data !== '')
                {
                    onChangeAddedPhotos(prev => {
                        return[...prev, data];
                    });

                    setPhotoLink('');
                }
            });
    }





    const uploadPhoto = async (ev) => {
        const files = ev.target.files;

        const fetchUrl = `${process.env.REACT_APP_SERVER_URL}/api/files/uploadFile`;
        const formData = new FormData();

        for(let i=0;i<files.length;i++)
        {
            formData.append('photos', files[i]);
        }

        const fetchOptions = {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            // headers: {
            //     'Content-type': 'multipart/form-data'
            // },
            body: formData
        };

        fetch(fetchUrl, fetchOptions)
            .then(response => response.json())
            .then(data => {
                if(data !== '' && data.length > 0)
                {
                    data.forEach((item, index) => {
                        console.log(item);
                        console.log(getImageUrlData(item));
                        onChangeAddedPhotos(prev => {
                            return[...prev, item];
                        });
    
                        setPhotoLink(''); 
                    });
                }
            });
    };


    const deletePhoto = async (photoId) => {
        console.log(photoId);

        onChangeAddedPhotos(prev => {
            return[...(prev.filter((item) => {return item._id != photoId}))];
        });

        console.log(addedPhotos);
    };

    return(
        <>
            <div className='photo-uploader-control'>
                <input value={photoLink} onChange={ev => setPhotoLink(ev.target.value)} type='text' placeholder={'Add using a link....jpg'}></input>

                <button className='bg-gray-200 px-4 rounded-2xl' onClick={addPhotoByLink}>Add&nbsp;photo</button>
            </div>

            <div className='uploaded-photos-grid'>
                {addedPhotos.length > 0 && addedPhotos.map((item, index) => (
                    <div className='uploaded-image-container' key={`${getImageUrlData(item).serverUrl}_${index}`}>
                        <button onClick={(e) => {deletePhoto(item._id)}} className='delete-photo-button'><i className="fa-solid fa-xmark delete-photo-icon"></i></button>
                        <img className='uploaded-image' src={getImageUrlData(item).serverUrl}></img>
                    </div>
                ))}
                <label className='h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 upload-image-container'>
                    <input type='file' multiple className='hidden' onChange={ev => uploadPhoto(ev)}></input>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="upload-image-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                </label>
            </div>
        </>
    )
};

export default PhotosUploader;