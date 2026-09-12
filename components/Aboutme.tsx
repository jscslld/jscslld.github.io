"use client"

import { Link } from "@heroui/link";
import { AnchorIcon } from "./icons";

export const AboutMe = () => {
    return (
        <div className="mb-3">
            <p><span id="about-me"></span></p>
            <p className="text-base/8">I’m currently pursuing a Ph.D. degree in Computer Science and Technology {" "}
                <Link
                    isExternal
                    showAnchorIcon
                    anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                    href="https://www.nju.edu.cn"
                    className="text-base/8"
                >
                    Nanjing University
                </Link>
                , advised by Prof.{" "} <Link
                    isExternal
                    showAnchorIcon
                    anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                    href="https://cs.nju.edu.cn/lutong/index.htm"
                    className="text-base/8"
                >
                    Tong Lu
                </Link>.</p>
            <p className="text-base/8">My research interests include multimodal audio-visual fine-grained understanding.</p>
        </div>

    );
}