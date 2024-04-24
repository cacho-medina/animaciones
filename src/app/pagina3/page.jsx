import Link from "next/link";

function page() {
    return (
        <div
            transition-style="in:diamond:center"
            className="h-screen grid place-items-center bg-violet-800"
        >
            <h1 className="text-6xl font-bold text-center text-yellow-600">
                Pagina con links para codepen
            </h1>
            <ul className="p-4 bg-yellow-600 mx-auto flex flex-col gap-4">
                <li className="transition-colors hover:bg-white">
                    <Link href="https://codepen.io/GreenSock/embed/dyGyopR/823312ec3785be7b25315ec2efd517d8/?theme-id=modal">
                        Card reveal
                    </Link>
                </li>
                <li className="transition-colors hover:bg-white">
                    <Link href="https://codepen.io/GreenSock/pen/WNjaxKp">
                        Horizontal container (gsap)
                    </Link>
                </li>
                <li className="transition-colors hover:bg-white">
                    <Link href="https://codepen.io/GreenSock/pen/QWjjYEw">
                        Parallax sections
                    </Link>
                </li>
                <li className="transition-colors hover:bg-white">
                    <Link href="https://codepen.io/chrispanayotoff/pen/qBbmLr">
                        Fullscreen slides
                    </Link>
                </li>
                <li className="transition-colors hover:bg-white">
                    <Link href="https://codepen.io/noeldelgado/pen/BaogqYy">
                        ScrollTrigger (horizontal)
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default page;
