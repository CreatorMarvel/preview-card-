import { Avatar, Box, Button, Typography } from "@mui/material";
import Image from "./Image";

function Card() {
	return (
		<Box
			sx={{
				padding: "24px",
				border: "2px solid black",
				borderRadius: "15px",
				backgroundColor: "white",
				maxWidth: "360px",
				boxShadow: "10px 10px 0 var(--gray-950)",
			}}
		>
			<Image />
			<Button
				sx={{
					backgroundColor: "var(--yellow-clr)",
					padding: "6px 16px",
					margin: "24px 0 18px",
					fontWeight: 800,
					display: "block",
					color: "var(--gray-850)",
				}}
			>
				Learning
			</Button>
			<Typography
				sx={{
					fontWeight: 500,
				}}
			>
				Published 21 Dec 2023
			</Typography>
			<Typography
				variant="h4"
				component="h1"
				sx={{
					fontSize: "24px",
					fontWeight: 800,
					margin: "24px 0",
				}}
			>
				HTML & CSS foundations
			</Typography>
			<Typography
				sx={{
					color: "var(--gray-500)",
					marginBottom: "32px",
				}}
			>
				These languages are the backbone of every website, defining structure,
				content, and presentation.
			</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "12px",
				}}
			>
				<Avatar src="/images/image-avatar.webp"></Avatar>
				<Typography
					sx={{
						fontWeight: 800,
					}}
				>
					Greg Hooper
				</Typography>
			</Box>
		</Box>
	);
}

export default Card;
