import styled from "styled-components";
import { React, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { ReactComponent as Close } from "../assets/icons/Close.svg";

export default function CropLogo({ setImgPreview, imgPreview }) {
	const transformComponentRef = useRef(null);
	const [scale, setScale] = useState(0.7);

	const updateScale = (e) => {
		const targetScale = parseFloat(e.target.value);
		const factor = Math.log(targetScale / scale);
		const { zoomIn, zoomOut } = transformComponentRef.current;

	

		if (targetScale > scale) {
			zoomIn(factor, 0);
		} else {
			zoomOut(-factor, 0);
		}

		setScale(targetScale);
	};
	return (
		<Container>
			<TransformWrapper
				ref={transformComponentRef}
				onZoomStop={(e) => {
					setScale(e.state.scale);
				}}
				initialScale={scale}
				minScale={0.1}
				maxScale={1.5}
				doubleClick={{
					disabled: true,
				}}
				limitToBounds={false}
				zoomAnimation={{ disabled: true }}
				centerOnInit
				onZoom={(e) => {
					setScale(e.state.scale);
				}}
			>
				{({ zoomIn, zoomOut, setTransform, ...rest }) => {
					return (
						<>
							<label>
								<TransformComponent
									wrapperStyle={{
										width: "100%",
										height: "100%",
									}}
								>
									<WhiteCircle style={{ background: imgPreview ? `url("${imgPreview}")` : "#131313" }} />
								</TransformComponent>
								<div>
									<Close onClick={() => setImgPreview(null)} />
									<p>Crop</p>
									<input type="range" min="0.1" max="1.5" step="0.01" value={scale} onChange={updateScale} />
									<button>Save</button>
								</div>
							</label>
						</>
					);
				}}
			</TransformWrapper>
		</Container>
	);
}

const Container = styled.div`
	> label {
		border: none;
		flex-direction: row;
		justify-content: start;

		> div {
			display: flex;
			flex-direction: column;
			gap: 13px;
			> svg {
				margin-left: 330px;
			}
			> p {
				font-size: 16px;
			}
			> input[type="range"] {
				width: 276px;
				height: 2px;
				margin-bottom: 20px;
			}
			> button {
				width: 109px;
				height: 32px;
				font-weight: 500;
				font-size: 14px;
				border-radius: 16px;
				border: none;
				color: #ffffff;
				background-color: #3d485f;
				margin-left: 168px;
			}
		}
	}
`;

const WhiteCircle = styled.div`
	margin: 32px;
	width: 113px;
	height: 113px;
	border-radius: 50%;
	background-color: #fff;
`;
