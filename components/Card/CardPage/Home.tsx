import Head from 'next/head';
import Nav from './Nav';
import Header from './Header';
import Section from './Section';
import PrizeCard from './CardPrice';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Treasure Hunt Game Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto px-4 py-4">
                <Nav />
            </div>

            <main className="container mx-auto px-4 py-8">
                <Header />

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Left Column (2/3 of the grid on large screens) */}
                    <div className="lg:col-span-2 space-y-8">
                        <Section title="Game Description">
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Room in a rental unit</li>
                                <li>Your own room in a home, plus access to shared spaces.</li>
                                <li>Shared common spaces</li>
                                <li>You'll share parts of the home.</li>
                                <li>Shared bathroom</li>
                                <li>You’ll share the bathroom with others.</li>
                                <li>Free cancellation before Sep 30</li>
                                <li>Get a full refund if you change your mind.</li>
                            </ul>
                        </Section>

                        <div className="w-full h-0.5 bg-gray-300"></div>

                        <Section title="About this place">
                            <p className="text-black leading-relaxed pr-0 lg:pr-24">
                                Room, breakfast included, in a quiet area, 15 minutes walk from the train station and the city center, 10 minutes walk from the conservatory, zenith omega and hiking Mont Faron. Bus 20 on the street provides access to the Mourillon beaches. Parking spaces on the street.
                            </p>
                        </Section>

                        <div className="w-full h-0.5 bg-gray-300"></div>

                        <Section title="Rules and Regulations">
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>All participants must be 18 years or older.</li>
                                <li>Teams can consist of 1-4 players.</li>
                                <li>The use of personal vehicles is not allowed during the game.</li>
                                <li>Participants must follow all local traffic laws and regulations.</li>
                                <li>The use of smartphones is allowed for navigation and research purposes only.</li>
                                <li>Interfering with other teams or damaging property will result in immediate disqualification.</li>
                                <li>The judges' decisions are final.</li>
                                <li>All participants must sign a waiver before joining the game.</li>
                            </ul>
                        </Section>
                    </div>

                    {/* Right Column (1/3 of the grid on large screens) */}
                    <div className="space-y-8">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Section title="Event Details">
                                <div className="border-t-2 border-gray-300 my-4"></div>
                                <ul className="space-y-2 text-gray-700">
                                    <li><strong>Date:</strong> TBD</li>
                                    <li><strong>Time:</strong> 10:00 AM - 4:00 PM</li>
                                    <li><strong>Location:</strong> Rome, Italy (Starting point to be announced)</li>
                                    <li><strong>Duration:</strong> Approximately 6 hours</li>
                                    <li><strong>Difficulty:</strong> Moderate</li>
                                </ul>
                            </Section>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <PrizeCard />
                        </div>

                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Section title="What to Bring">
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Comfortable walking shoes</li>
                                    <li>Weather-appropriate clothing</li>
                                    <li>Water and snacks</li>
                                    <li>Smartphone with data plan (optional)</li>
                                    <li>Camera (optional)</li>
                                    <li>Small backpack or bag</li>
                                </ul>
                            </Section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
