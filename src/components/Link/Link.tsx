import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { AnchorHTMLAttributes, forwardRef } from 'react';

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({});

interface NextLinkComposedProps
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
		Omit<NextLinkProps, 'href' | 'as'> {
	to: NextLinkProps['href'];
	linkAs?: NextLinkProps['as'];
}

export const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
	function NextLinkComposed(props, ref) {
		const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } = props;

		return (
			<NextLink
				href={to}
				prefetch={prefetch}
				as={linkAs}
				replace={replace}
				scroll={scroll}
				shallow={shallow}
				passHref
				locale={locale}
			>
				<Anchor ref={ref} {...other} />
			</NextLink>
		);
	}
);

export type LinkProps = {
	activeClassName?: string;
	as?: NextLinkProps['as'];
	href: NextLinkProps['href'];
	linkAs?: NextLinkProps['as']; // Useful when the as prop is shallow by styled().
	noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
	Omit<MuiLinkProps, 'href'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
	const {
		activeClassName = 'active',
		as,
		className: classNameProps,
		href,
		linkAs: linkAsProp,
		locale,
		noLinkStyle,
		prefetch,
		replace,
		role, // Link don't have roles.
		scroll,
		shallow,
		...other
	} = props;

	const router = useRouter();
	const isHrefString = typeof href === 'string';
	const pathname = isHrefString ? href : href.pathname;
	const className = `classNameProps ${router.pathname === pathname ? activeClassName : ''}`;
	const isExternal = isHrefString && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);
	const linkAs = linkAsProp || as;
	const nextjsProps = { to: href, linkAs, replace, scroll, shallow, prefetch, locale };

	if (isExternal) {
		if (noLinkStyle) return <Anchor className={className} href={href} ref={ref} {...other} />;

		return <MuiLink className={className} href={href} ref={ref} {...other} />;
	}

	if (noLinkStyle) {
		return <NextLinkComposed className={className} ref={ref} {...nextjsProps} {...other} />;
	}

	return (
		<MuiLink
			component={NextLinkComposed}
			className={className}
			ref={ref}
			{...nextjsProps}
			{...other}
		/>
	);
});

export default Link;
