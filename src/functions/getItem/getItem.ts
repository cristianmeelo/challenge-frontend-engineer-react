import React from 'react';

/**
 * Creates a menu item object with optional properties.
 *
 * @param {React.ReactNode} label - The label or content to display for the menu item.
 * @param {React.Key} [key] - A unique key to identify the menu item within a list of items.
 * @param {React.ReactNode} [icon] - An optional icon to display alongside the menu item label.
 * @param {MenuItem[]} [children] - An optional array of child menu items if the item has sub-items.
 * @returns {MenuItem} - A menu item object with the specified properties.
 */
export function getItem(label: React.ReactNode, key?: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
