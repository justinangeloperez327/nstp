<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
    courses: {
        type: Array,
        default: [],
    },
});


</script>

<template>
    <Head title="Students" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Courses
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="flex justify-end space-x-2 p-2">
                        <a
                            href="/courses/create"
                            type="button"
                            class="py-2 px-4 bg-blue-500 text-white rounded text-sm"
                            >Add Course</a
                        >
                    </div>

                    <table class="w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>

                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm ont-medium text-gray-500 uppercase tracking-wider"
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Code
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="course in courses" :key="course.id">
                                <td class="px-2 py-1 whitespace-nowrap">
                                    {{ course.id }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-xs">
                                    {{ course.code }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-xs">
                                    {{ course.name }}
                                </td>
                                <td class="px-2 py-1 whitespace-nowrap text-sm">
                                    <a
                                        href="/courses/1/edit"
                                        class="text-green-600 hover:text-indigo-900"
                                        >Edit</a
                                    >
                                    <a
                                        href="/courses/1/delete"
                                        class="text-red-600 hover:text-indigo-900"
                                        >Delete</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
