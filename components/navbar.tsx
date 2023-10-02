import Link from "next/link";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";

///simple call to prevent the actions from being cached so it can be easy to see changes mad eto the admin on the store during development stage
export const revalidate = 0;

const Navbar = async () => {
	///calling the categories we fetched from the getCategories function for us to then pass it as the data prop into the main vab
	const categories = await getCategories();
	return (
		<div className='border-b'>
			<Container>
				{/* we use the link from next as various links for the navbar  */}
				<div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
					<Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
						<p className='font-bold text-xl'>STORE</p>
					</Link>
					<MainNav data={categories} />
				</div>
			</Container>
		</div>
	);
};

export default Navbar;