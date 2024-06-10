-- CreateTable
CREATE TABLE "ResourceTestimonial" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "title" TEXT NOT NULL,
    "testimonial" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResourceTestimonial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ResourceTestimonial" ADD CONSTRAINT "ResourceTestimonial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceTestimonial" ADD CONSTRAINT "ResourceTestimonial_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
