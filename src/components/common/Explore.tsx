import React from 'react';
import './explore.css'; // Make sure the CSS file is correctly linked

const Explore: React.FC = () => {
  const articles = [
    { id: 'bodybuilding', name: 'Bodybuilding.com', url: 'https://bodybuilding.com', img: 'https://shop.bodybuilding.com/cdn/shop/files/who-we-are.jpg?v=1712063661&width=985' },
    { id: 'myfitnesspal', name: 'MyFitnessPal', url: 'https://myfitnesspal.com', img: 'https://i0.wp.com/chootung.design/wp-content/uploads/2020/06/MyFitnesspal-mockups.png?w=1440&ssl=1' },
    { id: 'worldsstrongestman', name: 'WorldsStrongestMan.com', url: 'https://worldsstrongestman.com', img: 'https://hips.hearstapps.com/hmg-prod/images/brian-64e388567bfc0.png?crop=1xw:0.8942307692307693xh;center,top&resize=1200:*' },
    { id: 'googlefit', name: 'GoogleFit.com', url: 'https://googlefit.com', img: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Fit_Marketing_1.gif' },
    { id: 'applefitness', name: 'AppleFitness.com', url: 'https://apple.com/fitness', img: 'https://www.apple.com/newsroom/images/product/apple-fitness-plus/Apple_iphone12_apple-fitness-plus-workout-for-pregnancy-and-older-adults-and-beginners_041521_big.jpg.large.jpg' },
    { id: 'healthline', name: 'Healthline.com', url: 'https://healthline.com', img: 'https://media.glassdoor.com/companyupdate/w900/1264836/healthline-media-companyupdate-1644026275049.png?signature=6898ea6afc416f99f8575087003c3c1da3d6f2a4f88a9aa1e78bf39ea729f1f6' },
    { id: 'sexualhealth', name: 'SexualHealth.com', url: 'https://sexualhealth.com', img: 'https://onemedicalgroup.co.uk/wp-content/uploads/2020/11/1-780x483.png' }
  ];

  return (
    <div className="explore-container">
      {articles.map(article => (
        <a href={article.url} key={article.id} className={`article-card ${article.id}`}>
          <div className="article-image" style={{ backgroundImage: `url(${article.img})` }}></div>
          <div className="article-name">{article.name}</div>
        </a>
      ))}
    </div>
  );
};

export default Explore;
