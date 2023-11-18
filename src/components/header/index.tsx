import { Button } from '@/components/button'
import * as Menu from '@radix-ui/react-navigation-menu'

export const Header: React.FC = () => {
	return (
		<div className="h-28 w-full bg-black">
			<div className="container mx-auto flex h-full items-center justify-between">
				<Menu.Root className="relative z-[1] bg-slate-100">
					<Menu.List className="flex items-center gap-3">
						<Menu.Item>
							<Menu.Trigger>Home</Menu.Trigger>
							<Menu.Content className="absolute top-10 grid h-80 w-[500px] grid-cols-2 grid-rows-3 gap-2 bg-red-50 p-5">
								<Menu.Item className="col-span- row-span-3 bg-black">
									Home
								</Menu.Item>
								<Menu.Item className="h-full w-full bg-red-100">Home</Menu.Item>
								<Menu.Item className="h-full w-full bg-red-100">Home</Menu.Item>
								<Menu.Item className="h-full w-full bg-red-100">Home</Menu.Item>
							</Menu.Content>
						</Menu.Item>

						<Menu.Item>
							<Menu.Trigger>Home</Menu.Trigger>
							<Menu.Content className="absolute top-10 grid h-80 w-[500px] grid-cols-2 grid-rows-3 gap-2 bg-red-50 p-5">
								<Menu.Item className="col-span- row-span-3 bg-black">
									Home
								</Menu.Item>
								<Menu.Item className="h-full w-full bg-red-100">Home</Menu.Item>
								<Menu.Item className="h-full w-full bg-red-100">Home</Menu.Item>
								<Menu.Item className="h-full w-full bg-red-100">Home</Menu.Item>
							</Menu.Content>
						</Menu.Item>
					</Menu.List>
				</Menu.Root>
				<div className="flex items-center gap-2">
					<Button size="lg" color="success" text="Fazer Login" />
					<Button size="lg" color="danger" text="Cadastrar" />
				</div>
			</div>
		</div>
	)
}
