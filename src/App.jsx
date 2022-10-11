import "./App.css";
import styled from "styled-components";
import { useState } from "react";

import CropLogo from "./components/CropLogo";
import TryUpload from "./components/TryUpload";
import Vector from "./assets/icons/Vector.svg";

function App() {
	const [imgPreview, setImgPreview] = useState(null);
	const [error, setError] = useState(false);

	const handleImageChange = (e) => {
		const selected = e.target.files[0];
		const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
		if (selected && ALLOWED_TYPES.includes(selected.type)) {
			let reader = new FileReader();
			reader.onloadend = () => {
				setImgPreview(reader.result);
			};
			reader.readAsDataURL(selected);
			console.log(selected);
		} else {
			setError(true);
		}
	};

	// if(error === true && imgPreview === false ){
	// 	return <TryUpload />
	// } else {
	// 	<Container />
	// }

	return (
		<Container >
			{!imgPreview &&  (
				<label>
					<p>
						<img src={Vector} alt="icone" /> Organization Logo
					</p>
					<p>Drop the image here or click to browse</p>
					<input type="file" accept="image/*" onChange={handleImageChange} />
				</label>
			)}
			{imgPreview ? <CropLogo setImgPreview={setImgPreview} imgPreview={imgPreview} /> : <TryUpload />}
			{/* {error && <TryUpload setError={setError} setImgPreview={setImgPreview} />} */}
		</Container>
	);
}

export default App;

const Container = styled.div`
	padding-top: 142px;
	> label {
		text-align: center;
		cursor: pointer;
		> p {
			display: flex;
			align-items: center;
			gap: 12.01px;
			font-size: 14px;
			font-weight: 600;
			line-height: 25.2px;
			color: #495567;
			> svg {
				width: 16px;
				height: 16px;
			}
			:nth-child(2) {
				font-weight: 400;
			}
		}
		> input[type="file"] {
			display: none;
		}
	}
`;

const ImageRender = styled.div``;
