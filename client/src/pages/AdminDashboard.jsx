
import { motion } from 'framer-motion';
import GlassCard from '../components/common/GlassCard';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Plus, Layout } from 'lucide-react';

const AdminDashboard = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Residential',
        image: '',
        description: '',
        link: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/projects', formData);
            toast.success("Project added successfully!");
            setFormData({ title: '', category: 'Residential', image: '', description: '', link: '' });
        } catch (err) {
            console.error(err);
            toast.error("Failed to add project.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-32 pb-24"
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center">
                        <Layout className="text-charcoal" />
                    </div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <GlassCard>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Plus size={20} className="text-gold" /> Add New Project
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Project Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                                            placeholder="e.g. Modern Villa"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Category</label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-gold transition-colors appearance-none"
                                        >
                                            <option className="bg-charcoal text-white">Residential</option>
                                            <option className="bg-charcoal text-white">Commercial</option>
                                            <option className="bg-charcoal text-white">Architecture</option>
                                            <option className="bg-charcoal text-white">Furniture</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Image URL</label>
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                                        placeholder="https://images.unsplash.com/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        rows="3"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-gold transition-colors resize-none"
                                        placeholder="Brief description of the project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-gold text-charcoal px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform hover-glow disabled:opacity-50"
                                >
                                    {loading ? "Adding..." : "Add Project"}
                                </button>
                            </form>
                        </GlassCard>
                    </div>

                    <div className="space-y-8">
                        <GlassCard className="bg-gold/10 border-gold/20">
                            <h3 className="font-bold mb-4">Quick Tips</h3>
                            <ul className="text-sm space-y-3 opacity-80">
                                <li>• Use high-quality Unsplash images.</li>
                                <li>• Keep descriptions concise and elegant.</li>
                                <li>• Select the correct category for filtering.</li>
                            </ul>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="font-bold mb-4">System Status</h3>
                            <div className="flex items-center gap-2 text-sm text-green-500">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Backend Online
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AdminDashboard;
