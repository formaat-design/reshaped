import React from "react";
import Modal from "components/Modal";
import Stack from "components/Stack";
import Button from "components/Button";
import Dismissible from "components/Dismissible";
import DropdownMenu from "components/DropdownMenu";
import Switch from "components/Switch";
import TextField from "components/TextField";
import useToggle from "hooks/useToggle";

export default { title: "Components/Modal" };

const Example = (props: any) => {
	const { active: activeProp, title, subtitle, ...modalProps } = props;
	const { active, activate, deactivate } = useToggle(activeProp);

	return (
		<>
			<Button onClick={activate}>Open dialog</Button>
			<Modal {...modalProps} active={active} onClose={deactivate}>
				<Stack gap={3}>
					{(title || subtitle) && (
						<Dismissible onClose={deactivate} closeAriaLabel="Close modal">
							{title && <Modal.Title>{title}</Modal.Title>}
							{subtitle && <Modal.Subtitle>{subtitle}</Modal.Subtitle>}
						</Dismissible>
					)}
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
					industries for previewing layouts and visual mockups.
					<Switch name="hey" />
					<TextField name="hey2" />
					<Button onClick={deactivate}>Hey</Button>
				</Stack>
			</Modal>
		</>
	);
};

export const sizes = () => (
	<>
		<Stack direction="row">
			<Example />
			<Example size="600px" />
		</Stack>

		<div style={{ height: 2000 }} />
	</>
);

export const customPadding = () => (
	<>
		<Stack direction="row">
			<Example padding={0} />
			<Example padding={6} />
		</Stack>

		<div style={{ height: 2000 }} />
	</>
);

export const positions = () => (
	<>
		<Stack direction="row">
			<Example position="bottom" />
			<Example position="start" />
			<Example position="end" />
		</Stack>

		<div style={{ height: 2000 }} />
	</>
);

export const composition = () => <Example title="Modal title" subtitle="Modal subtitle" active />;

export const testNestedTrap = () => {
	const { active, activate, deactivate } = useToggle();

	return (
		<>
			<DropdownMenu>
				<DropdownMenu.Trigger>
					{(attributes) => <Button attributes={attributes}>Open menu</Button>}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item onClick={activate}>Open dialog</DropdownMenu.Item>
					<DropdownMenu.Item>Item 2</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu>
			<Modal active={active} onClose={deactivate}>
				<Stack gap={3}>
					<DropdownMenu>
						<DropdownMenu.Trigger>
							{(attributes) => <Button attributes={attributes}>Open menu</Button>}
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Item>Item 1</DropdownMenu.Item>
							<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu>
					<Button onClick={deactivate}>Close</Button>
				</Stack>
			</Modal>
		</>
	);
};
