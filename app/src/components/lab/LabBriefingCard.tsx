import React from 'react';
import Link from 'next/link';
import {
  briefingUrl,
  formatIssueNumber,
  LAB_TOPIC_LABELS,
  type LabBriefingCard as LabBriefingCardType,
} from '@/types/lab';
import { imageUrl } from '@/lib/sanity/helpers';

interface Props {
  briefing: LabBriefingCardType;
  variant?: 'default' | 'featured';
}

export default function LabBriefingCard({ briefing, variant = 'default' }: Props) {
  const cover = imageUrl(briefing.mainImage);
  const topicLabel = LAB_TOPIC_LABELS[briefing.topic] ?? briefing.topic;
  const issue = formatIssueNumber(briefing.issueNumber);
  const snapshot = new Date(briefing.snapshotDate).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
  });

  if (variant === 'featured') {
    return (
      <Link
        href={briefingUrl(briefing)}
        className="group block border border-gray-800 bg-[#0b1220] text-gray-100 hover:border-[#f59e0b] transition-colors"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {cover && (
            <div className="md:col-span-2 bg-[#101a2f]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover}
                alt={briefing.mainImage?.alt || briefing.title}
                className="w-full h-full object-cover min-h-[16rem]"
              />
            </div>
          )}
          <div className={`p-8 ${cover ? 'md:col-span-3' : 'md:col-span-5'}`}>
            <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-[#f59e0b] uppercase mb-4">
              <span>{issue}</span>
              <span className="text-gray-600">/</span>
              <span>{topicLabel}</span>
              <span className="text-gray-600">/</span>
              <span className="text-gray-400">Snapshot {snapshot}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#f59e0b] transition-colors">
              {briefing.title}
            </h3>
            {briefing.subtitle && (
              <p className="text-gray-400 mb-4">{briefing.subtitle}</p>
            )}
            <p className="text-gray-200 leading-relaxed mb-6 line-clamp-3">
              {briefing.summary}
            </p>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-gray-800 pt-4">
              <span>By {briefing.analyst.name}</span>
              {briefing.readingTime ? <span>{briefing.readingTime} MIN</span> : null}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={briefingUrl(briefing)}
      className="group block border border-gray-200 bg-white hover:border-[#1a365d] transition-colors"
    >
      {cover && (
        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt={briefing.mainImage?.alt || briefing.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-[#1a365d] uppercase mb-3">
          <span className="font-semibold">{issue}</span>
          <span className="text-gray-400">/</span>
          <span>{topicLabel}</span>
        </div>
        <h3 className="text-lg font-bold text-[#1a365d] mb-2 group-hover:underline">
          {briefing.title}
        </h3>
        {briefing.subtitle && (
          <p className="text-sm text-gray-500 mb-3">{briefing.subtitle}</p>
        )}
        <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
          {briefing.summary}
        </p>
        <div className="flex items-center justify-between text-xs font-mono text-gray-500 border-t border-gray-100 pt-3">
          <span>By {briefing.analyst.name}</span>
          <span>Snapshot {snapshot}</span>
        </div>
      </div>
    </Link>
  );
}
