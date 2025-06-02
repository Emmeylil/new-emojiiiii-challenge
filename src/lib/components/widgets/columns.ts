import { Checkbox } from "$lib/components/ui/checkbox";
import { renderComponent } from "$lib/components/ui/data-table";
import type { iModal } from "$lib/interface";
import type { ColumnDef } from "@tanstack/table-core";
import DataTableSortButton from "$lib/components/ui/data-table/data-table-sort-button.svelte";
import { get, type Writable } from "svelte/store";
import type { Doc } from "$lib/convex/_generated/dataModel";

export const getColumns = (modalStore: Writable<iModal>) => {


    const columns: ColumnDef<Doc<"scores">>[] = [
        {
            id: 'select',
            header: ({ table }) =>
                renderComponent(Checkbox, {
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
                    onCheckedChange: (value) => table.toggleAllRowsSelected(!!value),
                    'aria-label': 'Select all'
                }),
            cell: ({ row }) =>
                renderComponent(Checkbox, {
                    checked: row.getIsSelected(),
                    onCheckedChange: (value) => row.toggleSelected(!!value),
                    'aria-label': 'Select row'
                }),
            enableSorting: false,
            enableHiding: false
        },
        {
            accessorKey: 'score',
            header: ({ column }) =>
                renderComponent(DataTableSortButton, {
                    onclick: column.getToggleSortingHandler(),
                    title: 'Score'
                }),
        },
        {
            accessorKey: 'name',
            header: ({ column }) =>
                renderComponent(DataTableSortButton, {
                    onclick: column.getToggleSortingHandler(),
                    title: 'Name'
                }),
        },
    ]

    return { columns }
}