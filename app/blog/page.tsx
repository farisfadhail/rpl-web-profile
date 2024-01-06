import Link from "next/link";
import style from "./blogPage.module.css";

export default function Blogs() {
	return (
		<>
			<h1 className="bg-blue-500">INI HALAMAN INDEX BLOG</h1>

			<Link href={"/about-us"}>ABOUT US</Link>
		</>
	);
}
