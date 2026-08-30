'use client';
import * as Base from 'fumadocs-ui/components/sidebar/base';

export function SidebarSeparator({ className, style, children, ...props }: ComponentProps<'p'>) {
  const depth = Base.useFolderDepth();

  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      nav={{
        title: 'Documentation',
      }}
      searchToggle={{ enabled: false }}
      themeSwitch={{ enabled: false }}
      containerProps={{
        style: {
          '--fd-docs-height': 'calc(100dvh - var(--site-nav-height))',
          '--fd-docs-row-1':
            'calc(var(--fd-banner-height, 0px) + var(--site-nav-height))',
        } as CSSProperties,
      }}
      sidebar={{
        enabled: true,
        components: {
          Separator: SidebarSeparator,
        },
    <Base.SidebarSeparator
      className={cn('[&_svg]:size-4 [&_svg]:shrink-0', className)}
      style={{
        paddingInlineStart: `calc(${2 + 3 * depth} * var(--spacing))`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Base.SidebarSeparator>
  );
}