import Point from "@components/icons/point";

const AlertBanner = () => {
    return (
        <div className="alert-banner">
            <div className="alert-banner__title">
                <h1>
                    Флаконы <br />
                    из бамбука
                </h1>

                <h5>
                    как приятный <br />
                    унисекс-аксессуар
                </h5>
            </div>
            <div className="alert-banner__content">
                <ul className="points">
                    <li className="points-item">
                        <span>
                            <Point />
                        </span>
                        Экологичный, приятный на ощупь материал
                    </li>
                    <li className="points-item">
                        <span>
                            <Point />
                        </span>
                        Металлический шарик для нанесения аромата на кожу
                    </li>
                    <li className="points-item">
                        <span>
                            <Point />
                        </span>
                        Одного флакона хватает на 2-3 месяца использования
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AlertBanner;
