from django.db import models
import json

POSITIONS = (
        ('QB', 'Quarterback'),
        ('WR', 'Wide Reciever'),
        ('CB', 'Cornerback'),
        ('K', 'Kicker'),
        ('P', 'Punter'),
        ('LS', 'Long Snapper'),
        ('DE', 'Defensive End'),
        ('ILB', 'Inside Linebacker'),
        ('DT', 'Defensive Tackle'),
        ('RB', 'Runningback'),
        ('OT', 'Offensive Tackle'),
        ('OG', 'Offensive Guard'),
        ('TE', 'Tight end'),
        ('S', 'Safety'),
        ('LB', 'Linebacker'),
        ('C', 'Center'),
        ('FB', 'Fullback'),
        ('DB', 'Defensive Back'),
        ('OLB', 'Outside Linebacker'),
        ('OL', 'Offensive Lineman'),
        ('SS', 'Strong Safety'),
        ('DL', 'Defensive Lineman'),
        ('NT', 'Nose Tackle'),
        ('FS', 'Free Safety'),
        ('BL', 'Bandleader'),
        ('4-3 DT', '4-3 Defensive Tackle'),
        ('4-3 DE', '4-3 Defensive End'),
        ('4-3 MLB', '4-3 Middle Linebacker'),
        ('4-3 OLB', '4-3 Outside Linebacker'),
        ('3-4 DT', '3-4 Defensive Tackle'),
        ('3-4 DE', '3-4 Defensive End'),
        ('3-4 ILB', '3-4 Inside Linebacker'),
        ('3-4 OLB', '3-4 Outside Linebacker'),
        )

class Player(models.Model):
    POSITIONS = POSITIONS

    name = models.CharField(max_length=100)
    position = models.CharField(max_length=3, choices=POSITIONS)
    college = models.CharField(max_length=100)
    data_json = models.TextField()

    @property
    def data(self):
        """JSON Structure of the player data"""
        return json.loads(self.data_json)

    @data.setter
    def data(self, value):
        self.data_json = json.dumps(value)

    def __str__(self):
        return "{p.name} ({p.position}), {p.college}".format(p=self)


class Settings(models.Model):
    sheet_id = models.CharField(max_length=100)
    range_def = models.CharField(max_length=100)
    last_updated = models.DateTimeField()
    subreddit = models.CharField(max_length=25)
    imguralbum = models.CharField(max_length=100)
    prio_range_def = models.CharField(max_length=100)
    posting_enabled = models.BooleanField(default=True)
    live_thread_id = models.CharField(max_length=60, blank=True)
    layout = models.CharField(max_length=100, default='plain')
    last_submitted_overall = models.IntegerField(default=0)
    cache_ttl = models.IntegerField(default=0)
    tweet_template = models.CharField(max_length=200, default='tweet')
    reddit_live_template = models.CharField(max_length=200, default='reddit_live.md')
    reddit_title_template = models.CharField(max_length=200, default='reddit_title')
    imgur_template = models.CharField(max_length=200, default='imgur')


class Priority(models.Model):
    POSITIONS = POSITIONS
    position = models.CharField(max_length=3, choices=POSITIONS)
    prio1 = models.CharField(max_length=30)
    prio2 = models.CharField(max_length=30)
    prio3 = models.CharField(max_length=30)
    prio4 = models.CharField(max_length=30)
    prio5 = models.CharField(max_length=30)
    prio6 = models.CharField(max_length=30)
    prio7 = models.CharField(max_length=30)

    def __str__(self):
        return "{p.position}: {p.prio1}, {p.prio2}, {p.prio3}, {p.prio4}, {p.prio5}, {p.prio6}, {p.prio7}".format(p=self)

    def as_list(self):
        r = []
        if self.prio1:
            r.append(self.prio1)
        if self.prio2:
            r.append(self.prio2)
        if self.prio3:
            r.append(self.prio3)
        if self.prio4:
            r.append(self.prio4)
        if self.prio5:
            r.append(self.prio5)
        if self.prio6:
            r.append(self.prio6)
        if self.prio7:
            r.append(self.prio7)
        return r

    def merge_with(self, other):
        m = [o for o in self.as_list() if o]
        for p in other.as_list():
            if p not in m:
                m.append(p)
        self.prio1 = m[0] if len(m) > 0 else None
        self.prio2 = m[1] if len(m) > 1 else None
        self.prio3 = m[2] if len(m) > 2 else None
        self.prio4 = m[3] if len(m) > 3 else None
        self.prio5 = m[4] if len(m) > 4 else None
        self.prio6 = m[5] if len(m) > 5 else None
        self.prio7 = m[6] if len(m) > 6 else None
        return self
