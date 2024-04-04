export function groupBy<T> (data: T[]) {
    const group: any = {};

    data.forEach((o: any) => {
        if (!group[o.category ]) {
            group[o.category] = [];
        }
        group[o.category].push(o);
    });

    const groupBy = Object.keys(group).map(category => ({
        category,
        services: group[category],
    }));

    return groupBy
}

