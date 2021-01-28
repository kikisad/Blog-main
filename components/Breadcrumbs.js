import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase();
};

export  const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs ">
      <div class="flex">
        <div class="flex-initial">
          <Link href="/">
              <a className="pr-2 text-gray-900  text-sm">
                Acceuil
              </a>
          </Link>
        </div>
        <div>
        <ul class="inline lowercase">
          {breadcrumbs.map((breadcrumb, i) => {
            return (
                    <li class="inline pr-2 text-sm">
                    <Link href={breadcrumb.href}>
                    <a key={breadcrumb.href}>
                     / {convertBreadcrumb(breadcrumb.breadcrumb)}
                    </a>
                    </Link>
                    </li>
            );
          })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
