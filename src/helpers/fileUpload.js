import { PostAdd } from "@mui/icons-material";
import { responsiveFontSizes } from "@mui/material";

export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('There is no file to upload.');
    const cloudUrl = import.meta.env.VITE_CLOUDINARYURL;
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file);
    try {
        const answer = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( !answer.ok ) throw new Error('Can not upload image.');

        const cloudAnsw = await answer.json();

        return cloudAnsw.secure_url;
    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }
}