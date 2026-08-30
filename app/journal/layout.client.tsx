'use client';
import * as Base from 'fumadocs-ui/components/sidebar/base';

export function SidebarSeparator({ className, style, children, ...props }: ComponentProps<'p'>) {
  const depth = Base.useFolderDepth();

  return (
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