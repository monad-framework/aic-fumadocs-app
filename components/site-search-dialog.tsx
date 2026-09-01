'use client';

import { useState } from 'react';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { fetchClient } from 'fumadocs-core/search/client/fetch';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogListItem,
  SearchDialogOverlay,
  TagsList,
  TagsListItem,
  type SearchItemType,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { cn } from '@/lib/cn';
import {
  discoveryFilters,
  getDiscoverySurface,
  type DiscoveryDomainTag,
} from '@/lib/discovery';

function FederatedSearchItem({
  item,
  onClick,
}: {
  item: SearchItemType;
  onClick: () => void;
}) {
  if (item.type === 'action') {
    return <SearchDialogListItem item={item} onClick={onClick} />;
  }

  const surface = getDiscoverySurface(item.url);

  return (
    <div className="relative">
      <SearchDialogListItem item={item} onClick={onClick} className="pe-36" />
      <span className="pointer-events-none absolute end-3 top-2.5 rounded-full border bg-fd-background/90 px-2 py-0.5 text-[10px] font-medium text-fd-muted-foreground shadow-sm backdrop-blur-sm">
        {surface.label} · {surface.cue}
      </span>
    </div>
  );
}

export default function SiteSearchDialog(props: SharedProps) {
  const { locale } = useI18n();
  const [tag, setTag] = useState<DiscoveryDomainTag | undefined>();
  const { search, setSearch, query } = useDocsSearch({
    client: fetchClient({
      locale,
      tag,
    }),
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput placeholder="Search all public knowledge" />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList
          items={query.data !== 'empty' ? query.data : null}
          Item={FederatedSearchItem}
        />
        <SearchDialogFooter className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="shrink-0 text-xs font-medium text-fd-muted-foreground">
            Scope
          </span>
          <div className="flex flex-wrap items-center gap-1">
            <button
              type="button"
              className={cn(
                'rounded-md px-2 py-1 text-xs text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground',
                tag === undefined && 'bg-fd-accent text-fd-accent-foreground',
              )}
              onClick={() => setTag(undefined)}
            >
              All
            </button>
            <TagsList
              tag={tag}
              onTagChange={(value) => setTag(value as DiscoveryDomainTag | undefined)}
              allowClear
            >
              {discoveryFilters.map((filter) => (
                <TagsListItem key={filter.tag} value={filter.tag}>
                  {filter.label}
                </TagsListItem>
              ))}
            </TagsList>
          </div>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}
