'use client';

import type * as PageTree from 'fumadocs-core/page-tree';
import * as Base from 'fumadocs-ui/components/sidebar/base';

export function SidebarSeparator({ item }: { item: PageTree.Separator }) {
  const depth = Base.useFolderDepth();

  return (
    <Base.SidebarSeparator
      className="[&_svg]:size-4 [&_svg]:shrink-0"
      style={{
        paddingInlineStart: `calc(${2 + 3 * depth} * var(--spacing))`,
      }}
    >
      {item.icon}
      {item.name}
    </Base.SidebarSeparator>
  );
}
