import SearchBar from '@/components/molecules/search-bar';

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-center content-center p-24 `}
        >
            <SearchBar />
        </main>
    );
}
