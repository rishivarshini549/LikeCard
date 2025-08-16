"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LikeCardProps {
  title: string;
  description: string;
}

export function LikeCard({ title, description }: LikeCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className="w-full h-full overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-xl tracking-tight">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Badge variant={isLiked ? "default" : "secondary"}>
          {isLiked ? "Liked" : "Not Liked"}
        </Badge>
      </CardContent>
      <CardFooter>
        <Button
          onClick={toggleLike}
          className="w-full transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <Heart
            className={cn(
              "mr-2 h-4 w-4 transition-all",
              isLiked && "fill-destructive text-destructive"
            )}
          />
          {isLiked ? "Unlike" : "Like"}
        </Button>
      </CardFooter>
    </Card>
  );
}
