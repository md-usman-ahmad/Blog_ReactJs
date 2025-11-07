import { MainLayout } from "./mainLayout";
import { UserProfileLayout } from "./UserProfileLayout";
import { SquarePen } from 'lucide-react';

export function UPZeroBlogs(){
    return (
        <>
        <MainLayout>
            <UserProfileLayout>
            <section id="state2" class="min-h-full flex items-center justify-center bg-white p-8">
    <div class="max-w-lg w-full text-center">
     <div class="flex justify-center mb-8">
            <SquarePen className="w-15 h-15 text-gray-500" />
     </div>
     <h2 class="text-3xl font-bold text-gray-900 mb-4">No Blogs yet</h2>
     <p class="text-lg text-gray-600 mb-10 leading-relaxed">You haven't published any blogs yet. Share your thoughts, stories, and expertise with your audience.</p><button class="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"> Write Your First Post </button>
    </div>
   </section>
            </UserProfileLayout>
            </MainLayout>
        </>
    )
}