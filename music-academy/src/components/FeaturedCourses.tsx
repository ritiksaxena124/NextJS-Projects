"use-client";

import { courses } from "@/data/music_courses.json";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courses.filter((course: Course) => course.isFeatured);
  return (
    <>
      <div className="py-12 space-y-12 px-8 lg:px-16">
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-2xl tracking-tight md:text-3xl text-zinc-400">
              Learn from the Best
            </p>
            <h1 className="text-3xl text-zinc-200 font-semibold tracking-tight md:text-5xl">
              Featured Courses
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course: Course) => (
              <Link href={course.slug} key={course.id}>
                <div className="p-4 h-full border border-zinc-700 rounded-lg space-y-5 hover:bg-zinc-900">
                  <div className="space-y-2">
                    <h2 className="text-xl text-zinc-200 font-semibold">
                      {course.title} by
                      <span className="italic font-normal">
                        {course.instructor}
                      </span>
                    </h2>
                    <p className="text-zinc-400">{course.description}</p>
                  </div>
                  <p className="text-xl text-zinc-200 font-semibold bottom-0">
                    ${course.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(200,200,200)] transition duration-200">
            Explore Courses
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
