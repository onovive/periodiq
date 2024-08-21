import Head from 'next/head';
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
            <main className="container mx-auto px-4 py-8">
                <Header />

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-8">
                        <Section title="Game Description">
                            <p className="text-gray-700 mb-4">
                                Join us for an exciting treasure hunt through the historic streets of Rome! Company A invites you to test your wit, solve challenging puzzles, and uncover the hidden treasures of the Eternal City. Work in teams or individually to decode clues, explore iconic landmarks, and race against time to claim the grand prize!
                            </p>
                            <p className="text-gray-700">
                                Whether you're a history buff, a puzzle enthusiast, or simply looking for a unique adventure, this treasure hunt offers something for everyone. Discover hidden gems, learn fascinating facts about Rome, and compete for amazing prizes!
                            </p>
                        </Section>

                        <Section title="How to Play">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 custom-list">
                                <li>Register your team (1-4 players) through our website or on the day of the event.</li>
                                <li>Arrive at the starting point (to be announced) at least 30 minutes before the game begins.</li>
                                <li>Receive your game pack, including a map, clue sheet, and any necessary tools.</li>
                                <li>Solve clues and riddles that will lead you to various locations around Rome.</li>
                                <li>Complete tasks or answer questions at each location to receive points or additional clues.</li>
                                <li>Race to the finish line with the most points to win!</li>
                            </ol>
                        </Section>

                        <Section title="Rules and Regulations">
                            <ul className="list-disc list-inside space-y-2 text-gray-700 custom-list">
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

                    <div className="space-y-8">
                        <Section title="Event Details">
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Date:</strong> TBD</li>
                                <li><strong>Time:</strong> 10:00 AM - 4:00 PM</li>
                                <li><strong>Location:</strong> Rome, Italy (Starting point to be announced)</li>
                                <li><strong>Duration:</strong> Approximately 6 hours</li>
                                <li><strong>Difficulty:</strong> Moderate</li>
                            </ul>
                        </Section>

                        <Section title="Prizes">
                            <div className="space-y-4 mt-4">
                                <PrizeCard title="1st Prize" amount="€5000" bgColor="bg-yellow-100" textColor="text-yellow-600" />
                                <PrizeCard title="2nd Prize" amount="€2500" bgColor="bg-gray-100" textColor="text-gray-600" />
                                <PrizeCard title="3rd Prize" amount="€1000" bgColor="bg-yellow-50" textColor="text-yellow-600" />
                            </div>
                        </Section>

                        <Section title="What to Bring">
                            <ul className="space-y-2 text-gray-700 custom-list">
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
            </main>
        </div>
    );
}
