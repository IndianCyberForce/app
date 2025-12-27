const Storage = {
    getData: async () => {
        const res = await fetch('/api/customers');
        return await res.json();
    },
    setData: async (data) => {
        await fetch('/api/customers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
};
