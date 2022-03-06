import React from "react";
import Avatar from "components/Avatar";
import Stack from "components/Stack";
import Badge from "components/Badge";
import Icon from "components/Icon";
import Button from "components/Button";
import SVG from "icons/Close";

export default { title: "Components/Badge" };

export const variants = () => (
	<Stack direction="row">
		<Badge>Base</Badge>
		<Badge variant="faded">Faded</Badge>
		<Badge variant="outline">Outline</Badge>
	</Stack>
);

export const colors = () => (
	<Stack>
		<Stack direction="row">
			<Badge color="critical">Base</Badge>
			<Badge color="critical" variant="faded">
				Faded
			</Badge>
			<Badge color="critical" variant="outline">
				Outline
			</Badge>
		</Stack>

		<Stack direction="row">
			<Badge color="positive">Base</Badge>
			<Badge color="positive" variant="faded">
				Faded
			</Badge>
			<Badge color="positive" variant="outline">
				Outline
			</Badge>
		</Stack>

		<Stack direction="row">
			<Badge color="primary">Base</Badge>
			<Badge color="primary" variant="faded">
				Faded
			</Badge>
			<Badge color="primary" variant="outline">
				Outline
			</Badge>
		</Stack>
	</Stack>
);

export const rounded = () => (
	<Stack>
		<Stack direction="row">
			<Badge rounded>Base</Badge>
			<Badge rounded variant="faded">
				Faded
			</Badge>
			<Badge rounded variant="outline">
				Outline
			</Badge>
		</Stack>
		<Stack direction="row">
			<Badge rounded color="critical">
				2
			</Badge>

			<Badge rounded color="critical" size="small">
				2
			</Badge>
		</Stack>
	</Stack>
);

export const sizes = () => (
	<Stack>
		<Stack direction="row">
			<Badge size="small">Small</Badge>
			<Badge>Medium</Badge>
		</Stack>
		<Stack direction="row">
			<Badge rounded size="small">
				Small
			</Badge>
			<Badge rounded>Medium</Badge>
		</Stack>
	</Stack>
);

export const empty = () => (
	<Stack direction="row">
		<Badge color="critical" />
		<Badge size="small" color="critical" />
		<Badge rounded color="critical" />
		<Badge rounded size="small" color="critical" />
	</Stack>
);

export const container = () => {
	const [hidden, setHidden] = React.useState(false);

	return (
		<Stack align="start" gap={6}>
			<Button onClick={() => setHidden(!hidden)}>Toggle badges</Button>

			<Stack direction="row" gap={6}>
				<Badge.Container>
					<Badge color="primary" hidden={hidden}>
						5
					</Badge>
					<Avatar initials="A" squared />
				</Badge.Container>

				<Badge.Container position="bottom-end">
					<Badge color="primary" hidden={hidden}>
						123
					</Badge>
					<Avatar initials="A" squared />
				</Badge.Container>
			</Stack>

			<Stack direction="row" gap={6}>
				<Badge.Container>
					<Badge size="small" color="primary" rounded hidden={hidden}>
						54
					</Badge>
					<Avatar initials="A" squared />
				</Badge.Container>

				<Badge.Container>
					<Badge size="small" color="primary" rounded hidden={hidden} />
					<Avatar initials="A" squared />
				</Badge.Container>
			</Stack>

			<Stack direction="row" gap={6} align="center">
				<Badge.Container overlap>
					<Badge size="small" color="primary" rounded hidden={hidden}>
						544
					</Badge>
					<Avatar initials="A" />
				</Badge.Container>

				<Badge.Container overlap>
					<Badge size="small" color="primary" rounded hidden={hidden} />
					<Avatar initials="A" />
				</Badge.Container>

				<Badge.Container overlap position="bottom-end">
					<Badge size="small" color="primary" rounded hidden={hidden} />
					<Avatar initials="A" />
				</Badge.Container>

				<Badge.Container overlap>
					<Badge size="small" color="primary" rounded hidden={hidden}>
						2
					</Badge>
					<Icon svg={SVG} size={5} />
				</Badge.Container>
			</Stack>
		</Stack>
	);
};
