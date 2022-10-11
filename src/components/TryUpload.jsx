import { useCallback, useState } from "react";
import styled from "styled-components";

import { ReactComponent as Close } from "../assets/icons/Close.svg";
import { ReactComponent as Exclamation } from "../assets/icons/Exclamation.svg";

export default function TryUpload({setImgPreview, setError}) {
	
	const handleClick = () => {
		setImgPreview(null);
		setError(false);
	}

	return (
		<Container>
			<label>
				<div >
					<Exclamation />
				</div>
				<section>
					<Close onClick={handleClick}/>
					<p>Sorry, the upload failed</p>
					<p onClick={handleClick}>Try again</p>
				</section>
			</label>
		</Container>
	);
}

const Container = styled.div`
	> label {
		justify-content: start;
		flex-direction: row;
		border: none;
		
		> div {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 32px;
			width: 113px;
			height: 113px;
			border-radius: 50%;
			background-color: #c3cbd5;
		}
		> section {
			margin-bottom: 40px;
			>svg {
				cursor: pointer;
			}
			> p {
				line-height: 180%;
				font-size: 16px;
				:nth-child(2) {
					color: #c64d32;
					font-weight: 400;
				}
				:nth-child(3) {
					text-decoration: underline;
					font-weight: 600;
					cursor: pointer;
				}
			}
			> svg {
				margin-left: 330px;
			}
		}
	}
`;
