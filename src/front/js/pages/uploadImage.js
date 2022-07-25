import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";


export const UploadImage = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [imageFiles, setImageFiles] = useState(null)

    const upload = (evt) => {
        // we are about to send tu to the backend
        evt.preventDefault();
        console.log("here is the file", imageFiles)
        let body = new FormData();
        body.append("profile_image", imageFiles[0]);
        const options = {
            body,
            method: 'PUT'
        }
        fetch(`${process.env.BACKEND_URL}/api/upload/${store.userDoctor.id}`, options)
            .then(response => response.json())
            .then(data => console.log("correct!!", data))
            .catch(err => console.error("error", err))
    }

    return (
        <div>
            <form onSubmit={upload}>
                <input type="file" onChange={(e) => setImageFiles(e.target.files)}></input>
                <button>Upload</button>
            </form>
        </div>
    )
};