import UserProfile from './UserProfile.jsx';


const Home = () => {
    return(
    <div>
        <h2>Test UserProfile Component</h2>

        {/* Приклад 1: Усі пропси передані */}
        <UserProfile name="Alice" age={30} hobby="Reading" />

        {/* Приклад 2: Тільки name та age */}
        <UserProfile name="Bob" age={25} />

        {/* Приклад 3: Тільки name та hobby */}
        <UserProfile name="Charlie" hobby="Cycling" />

        {/* Приклад 4: Тільки name (age і hobby не передані) */}
        <UserProfile name="David" />
    </div>
    )
};

export default Home;
