import styled from "styled-components";

import { ReactComponent as Vector } from "../assets/icons/Vector.svg";

export default function FinalLogo() {
	return (
		<Container>
			<label>
				<WhiteCircle />

				<div>
					<p>
						<Vector /> Organization Logo
					</p>
					<p>Drop the image here or click to browse</p>
					<input type="file" />
				</div>
			</label>
		</Container>
	);
}

const Container = styled.div`
	> label {
		display: flex;
		flex-direction: row;
		justify-content: start;
		gap: 50px;
		> div {
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: 12.01px;
			> p:nth-child(1) {
				font-weight: 600;
			}
		}
	}
`;

const WhiteCircle = styled.div`
	margin-left: 32px;
	width: 113px;
	height: 113px;
	border-radius: 50%;
	background-color: #fff;
`;
