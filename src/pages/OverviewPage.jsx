import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { motion } from "framer-motion"
import SalesOverviewChart from '../components/overview/SalesOverviewChart'
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Overview"></Header>
            <main className='max-w-8xl mx-auto py-4 sm:px-6 lg:px-8'>
                {/* STATS */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    trasition={{ duration: 1 }}
                >
                    <StatCard name='Total Sales' icon={Zap} value='$12,000' color='#6366F1' />
                    <StatCard name='New Users' icon={Users} value='1234' color='#8b5CF6' />
                    <StatCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
                    <StatCard name='Conversion rate' icon={BarChart2} value='12.5%' color='#10B981' />
                </motion.div>
                {/* CHARTS */}

                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    <SalesOverviewChart />
                    <CategoryDistributionChart />
                    <SalesChannelChart />
                </div>
            </main>
        </div>
    )
}

export default OverviewPage
