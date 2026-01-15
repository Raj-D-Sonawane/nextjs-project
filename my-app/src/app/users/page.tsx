type Product = {
    id: number;
    title: string;
}
export default async function UserPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 30 }, // ⏱️ ISR
    });

    const products: Product[] = await res.json();

    return (
        <div>
            <h1>Products (ISR - 30 sec)</h1>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
}