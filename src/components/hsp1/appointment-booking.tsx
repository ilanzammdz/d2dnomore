"use client";

import { useMemo, useState } from "react";
import { CircleCheckIcon } from "lucide-react";

import { Button } from "@/components/hsp1/ui/button";
import { Calendar } from "@/components/hsp1/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/hsp1/ui/card";
import { ScrollArea } from "@/components/hsp1/ui/scroll-area";

export function AppointmentBooking() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = Array.from({ length: 21 }, (_, i) => {
    const totalMinutes = i * 30;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;

    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });

  // A few slots each week are already booked out
  const bookedDates = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 3 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + 3 + i * 2);
      return d;
    });
  }, []);

  return (
    <div>
      <Card className="gap-0 p-0">
        <CardHeader className="flex h-max justify-center border-b !p-4">
          <CardTitle>Book Your Free Estimate</CardTitle>
        </CardHeader>
        <CardContent className="relative p-0 md:pr-48">
          <div className="p-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
              disabled={(d) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (d < today) return true;
                return bookedDates.some(
                  (booked) => booked.toDateString() === d.toDateString()
                );
              }}
              modifiers={{ booked: bookedDates }}
              modifiersClassNames={{
                booked: "[&>button]:line-through opacity-100",
              }}
              showOutsideDays={false}
              className="bg-transparent p-0 [--cell-size:--spacing(10)]"
              formatters={{
                formatWeekdayName: (d) =>
                  d.toLocaleString("en-US", { weekday: "short" }),
              }}
            />
          </div>
          <div className="inset-y-0 right-0 flex w-full flex-col gap-4 border-t max-md:h-60 md:absolute md:w-48 md:border-t-0 md:border-l">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-2 p-6">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className="w-full shadow-none"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 border-t px-6 !py-5 md:flex-row">
          <div className="flex items-center gap-2 text-sm">
            {date && selectedTime ? (
              <>
                <CircleCheckIcon className="size-5 stroke-green-600 dark:stroke-green-400" />
                <span>
                  Your estimate is booked for{" "}
                  <span className="font-medium">
                    {date.toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </span>{" "}
                  at <span className="font-medium">{selectedTime}</span>.
                </span>
              </>
            ) : (
              <>Select a date and time for your free in-home estimate.</>
            )}
          </div>
          <Button
            disabled={!date || !selectedTime}
            className="w-full md:ml-auto md:w-auto"
          >
            Confirm Appointment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
