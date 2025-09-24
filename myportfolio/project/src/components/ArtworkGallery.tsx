import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Star, Filter, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ArtworkGallery = () => {
  const { themeConfig } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const artworks = [
    {
      id: 1,
      title: "Digital Dreams",
      artist: "Shruti Buyre",
      price: 299,
      category: "Digital Art",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 234,
      views: 1520,
      rating: 4.8,
      description: "A mesmerizing blend of digital artistry and creative vision"
    },
    {
      id: 2,
      title: "UI Harmony",
      artist: "Shruti Buyre",
      price: 199,
      category: "UI Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 189,
      views: 980,
      rating: 4.9,
      description: "Perfect balance of form and function in interface design"
    },
    {
      id: 3,
      title: "Code Poetry",
      artist: "Shruti Buyre",
      price: 149,
      category: "Abstract",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 156,
      views: 743,
      rating: 4.7,
      description: "Where programming meets artistic expression"
    },
    {
      id: 4,
      title: "Responsive Flow",
      artist: "Shruti Buyre",
      price: 249,
      category: "Web Design",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 298,
      views: 1340,
      rating: 4.9,
      description: "Fluid design that adapts beautifully across all devices"
    },
    {
      id: 5,
      title: "Component Symphony",
      artist: "Shruti Buyre",
      price: 179,
      category: "UI Design",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 167,
      views: 892,
      rating: 4.6,
      description: "Harmonious composition of reusable design elements"
    },
    {
      id: 6,
      title: "Data Visualization",
      artist: "Shruti Buyre",
      price: 329,
      category: "Digital Art",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 412,
      views: 2100,
      rating: 5.0,
      description: "Transforming complex data into beautiful visual stories"
    }
  ];

  const categories = ['All', 'Digital Art', 'UI Design', 'Web Design', 'Abstract'];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory;
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="artwork" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${themeConfig.textPrimary} mb-6`}>
            Digital <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}>Artwork</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${themeConfig.gradient} mx-auto mb-4`}></div>
          <p className={`${themeConfig.textSecondary} text-lg max-w-2xl mx-auto`}>
            Explore my collection of digital art pieces, UI designs, and creative visualizations available for purchase
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeConfig.textSecondary}`} size={20} />
            <input
              type="text"
              placeholder="Search artworks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 ${themeConfig.cardBg} ${themeConfig.border} border rounded-xl ${themeConfig.textPrimary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-300`}
            />
          </div>
          <div className={`flex gap-2 ${themeConfig.cardBg} ${themeConfig.border} border rounded-xl p-2`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${themeConfig.accent} text-white shadow-md`
                    : `${themeConfig.textSecondary} hover:bg-black/10`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`group ${themeConfig.cardBg} ${themeConfig.border} border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                    <Heart size={16} />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                    <Eye size={16} />
                  </button>
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 left-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Heart size={14} />
                    {artwork.likes}
                  </div>
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Eye size={14} />
                    {artwork.views}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className={`text-xl font-bold ${themeConfig.textPrimary} mb-1`}>{artwork.title}</h3>
                    <p className={`${themeConfig.textSecondary} text-sm`}>by {artwork.artist}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={16} fill="currentColor" />
                    <span className={`${themeConfig.textSecondary} text-sm`}>{artwork.rating}</span>
                  </div>
                </div>

                <p className={`${themeConfig.textSecondary} text-sm mb-4 leading-relaxed`}>
                  {artwork.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}>
                    ${artwork.price}
                  </div>
                  <button className={`flex items-center gap-2 bg-gradient-to-r ${themeConfig.accent} text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                    <ShoppingCart size={16} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className={`${themeConfig.cardBg} ${themeConfig.border} border rounded-3xl p-12`}>
            <h3 className={`text-3xl font-bold ${themeConfig.textPrimary} mb-4`}>
              Commission Custom Artwork
            </h3>
            <p className={`${themeConfig.textSecondary} mb-8 text-lg max-w-2xl mx-auto`}>
              Looking for something unique? I create custom digital art, UI designs, and visual experiences tailored to your vision.
            </p>
            <button className={`bg-gradient-to-r ${themeConfig.accent} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
              Request Custom Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkGallery;