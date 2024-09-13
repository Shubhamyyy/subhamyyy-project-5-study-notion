import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-6 md:px-12">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">About StudyWithEtoos</h2>
                <p class="text-gray-700 text-lg">Empowering students with innovative and effective study solutions.</p>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="md:w-1/2 md:pl-8">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p class="text-gray-600 mb-6">At StudyWithTeoOS, we are dedicated to creating a platform that supports students in their learning journey. Our goal is to provide a comprehensive and interactive study environment that caters to diverse learning needs and styles.</p>
                    <h3 class="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h3>
                    <ul class="list-disc list-inside text-gray-600 mb-6">
                        <li>Interactive study tools and resources</li>
                        <li>Personalized study plans and progress tracking</li>
                        <li>Collaborative features for group study and discussions</li>
                        <li>Access to a wide range of study materials and quizzes</li>
                    </ul>
                    <a href="signup" class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">SignUp</a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About;
