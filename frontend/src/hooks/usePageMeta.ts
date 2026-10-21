"use client";

import { useEffect } from "react";

export function usePageMeta(title: string, description: string, image?: string) {
  useEffect(() => {
    document.title = title;

    const setMeta = (key: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta("description", description);
    if (image) setMeta("og:image", image, true);
  }, [description, image, title]);
}
